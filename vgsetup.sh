# Update Packages
apt-get update
# Upgrade Packages
apt-get upgrade

# Basic Linux Stuff
apt-get install -y git

# Apache
apt-get install -y apache2

# Enable Apache Mods
a2enmod rewrite

# Install PHP and related Mods
sudo apt-get install -y php
sudo apt-get install -y php-cgi
sudo apt-get install -y libapache2-mod-php
sudo apt-get install -y php-common
sudo apt-get install -y php-pear 
sudo apt-get install -y php-mbstring


# Configure Apache2 to use PHP
sudo a2enconf php7.2-cgi


# Restart Apache
service apache2 restart


# Set MySQL Pass
debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'

# Install MySQL
apt-get install -y mysql-server
apt-get install -y mysql-client


# Restart Apache
sudo service apache2 restart


# Install phpMyAdmin
# sudo apt-get install -y phpmyadmin 
# sudo apt-get install -y php-gettext
