# syntax=docker/dockerfile:1
FROM php:7.4-apache AS composer-builder

# Install Zip to use composer
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    unzip
RUN docker-php-ext-install zip

# Install and update composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer self-update

USER www-data
WORKDIR /composer
COPY composer.* /composer/
RUN composer install

# Site
FROM php:7.4-apache
RUN cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini
RUN chown -R www-data:www-data /var/www/html/

COPY --from=composer-builder /composer/vendor /var/www/vendor
RUN a2enmod headers mime rewrite

# build.sh later creates link to vendor/
