#!/usr/bin/env bash

apt-get update
apt-get upgrade

sudo apt-get install unzip -y
sudo apt-get install openjdk-7-jre-headless -y
sudo apt-get install nodejs -y

mkdir -p /var/local/nodejs/bin

if [ ! -L /var/local/nodejs/bin/node ]; then
    ln -s /usr/bin/nodejs /var/local/nodejs/bin/node
fi

mkdir -p /var/lock/subsys/

mkdir -p /etc/rc.d/init.d/
echo "echo_success()" >> /etc/rc.d/init.d/functions
echo "{"              >> /etc/rc.d/init.d/functions
echo "echo 'OK'"      >> /etc/rc.d/init.d/functions
echo "return 0"       >> /etc/rc.d/init.d/functions
echo "}"              >> /etc/rc.d/init.d/functions
echo "echo_failure()" >> /etc/rc.d/init.d/functions
echo "{"              >> /etc/rc.d/init.d/functions
echo "echo 'FAIL'"    >> /etc/rc.d/init.d/functions
echo "return 1"       >> /etc/rc.d/init.d/functions
echo "}"              >> /etc/rc.d/init.d/functions

echo -n "Installing elasticsearch..."
if [ ! -d /root/elasticsearch ]; then
    rm -f elasticsearch-0.9.0.zip
    rm -rf elasticsearch-0.9.0
    rm -rf /root/elasticsearch
    wget -q https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-0.90.3.zip
    unzip elasticsearch-0.90.3.zip
    mv elasticsearch-0.90.3 /root/elasticsearch
    rm elasticsearch-0.90.3.zip

    rm -rf /root/elasticsearch/config
    ln -s /home/vagrant/eea.elasticsearch/etc/dev/config /root/elasticsearch/config
fi
echo "Done"


echo -n "Installing elasticsearch plugins..."
if [ ! -d /root/elasticsearch/plugins/eea-rdf-river-1.4.3 ]; then
    rm -rf /root/elasticsearch/plugins/eea-rdf-river-1.4.2
    /root/elasticsearch/bin/plugin --url https://github.com/eea/eea.elasticsearch.river.rdf/raw/master/target/releases/eea-rdf-river-plugin-1.4.3.zip --install eea-rdf-river-1.4.3
fi

if [ ! -d /root/elasticsearch/plugins/elasticsearch-jetty-0.90.0 ]; then
    /root/elasticsearch/bin/plugin --url https://oss-es-plugins.s3.amazonaws.com/elasticsearch-jetty/elasticsearch-jetty-0.90.0.zip --install elasticsearch-jetty-0.90.0
fi

if [ ! -d /root/elasticsearch/plugins/analysis-icu ]; then
    /root/elasticsearch/bin/plugin -install elasticsearch/elasticsearch-analysis-icu/1.11.0
fi


if [ ! -d /root/elasticsearch/plugins/head ]; then
    /root/elasticsearch/bin/plugin -install mobz/elasticsearch-head
fi
echo "Done"

sudo apt-get install apache2 -y
a2enmod proxy_http
a2enmod proxy

mkdir -p /var/local/es-dev

if [ ! -L /var/local/es-dev/facetview ]; then
    ln -s /home/vagrant/facetview /var/local/es-dev/facetview
fi

if [ ! -L /var/local/es-dev/eea.elasticsearch ]; then
    ln -s /home/vagrant/eea.elasticsearch /var/local/es-dev/eea.elasticsearch
fi

if [ ! -L /etc/apache2/sites-enabled/elasticsearch.conf ]; then
    ln -s /home/vagrant/eea.elasticsearch/etc/dev/httpd/elasticsearch.conf /etc/apache2/sites-enabled/elasticsearch.conf
fi

if [ ! -L /etc/apache2/sites-available/elasticsearch.conf ]; then
    ln -s /home/vagrant/eea.elasticsearch/etc/dev/httpd/elasticsearch.conf /etc/apache2/sites-available/elasticsearch.conf
fi

if [ ! -L /etc/init.d/eea-search-dev ]; then
    ln -s /home/vagrant/eea.elasticsearch/etc/dev/init.d/eea-search-dev /etc/init.d/eea-search-dev
fi

# Restart apache2
service apache2 restart

# Starting elasticsearch
/root/elasticsearch/bin/elasticsearch

# Starting eea-search
sudo /etc/init.d/eea-search-dev start

echo "Bootstrap complete!"
