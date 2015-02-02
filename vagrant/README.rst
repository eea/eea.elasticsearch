NOTE
====
If you have used the version with es 0.90.3 installed please rebuild the box::

    vagrant destroy
    vagrant up

1. Install Virtualbox and Vagrant
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Install Virtualbox from https://www.virtualbox.org/wiki/Linux_Downloads::

    sudo dpkg -i virtualbox-4.3_4.3.20-96996~Ubuntu~raring_amd64.deb 

Install Virtualbox extension pack from https://www.virtualbox.org/wiki/Linux_Downloads

Install Vagrant from https://www.vagrantup.com/downloads.html::
    
    sudo dpkg -i sudo dpkg -i vagrant_1.6.5_x86_64.deb

2. Start virtual machine
~~~~~~~~~~~~~~~~~~~~~~~~
Go to the Vagrantfile location::
    
    cd vagrant

Start virtual machine. First setup may take up to an hour::
    
    vagrant up

Log into the virtual machine::
    
    vagrant ssh

3. Do some manual Apache2 configurations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Remove conflicting default configuration::

   vagrant ssh
   sudo su
   rm /etc/apache2/sites-enabled/000-default.conf 

Change apache setting to allow all requests::

    vagrant ssh
    sudo su
    cd /etc/apache2/
    vim apache2.conf


    Change
    <Directory />
            Options FollowSymLinks
            AllowOverride None
            Require all denied
    </Directory>

    to

    <Directory />
            Options FollowSymLinks
            AllowOverride None
            Require all granted
    </Directory>


Optionally you can change the config to point to your local elasticsearch
server.

4. Index data into the virtual machine elasticsearch instance
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create local indexes run in the VM::

    cd /home/vagrant/eea.elasticsearch/webapps/eea_search/scripts
    ./es-setup-analyzers.sh localhost/elasticsearch
    ./es-create-index.sh localhost/elasticsearch


5. Check that everything is working
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Go to `http://localhost:8080/search` to check if everything is working

Optionally, to you can edit `/etc/hosts` on your local system and
add this line::

   192.168.42.10    eea-es-dev 

Then, you can go to `eea-es-dev/search` in your browser to view the app
