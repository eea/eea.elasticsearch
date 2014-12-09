#!/usr/bin/env bash

apt-get update
apt-get upgrade

sudo apt-get install unzip -y
sudo apt-get install openjdk-7-jre-headless -y

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
if [ ! -d /root/elasticsearch/plugins/eea-rdf-river-1.4.2 ]; then
    /root/elasticsearch/bin/plugin --url https://github.com/eea/eea.elasticsearch.river.rdf/raw/master/target/releases/eea-rdf-river-plugin-1.4.2.zip --install eea-rdf-river-1.4.2
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

# Restart apache2
service apache2 restart

# Starting elasticsearch
/root/elasticsearch/bin/elasticsearch

echo "Bootstrap complete!"
