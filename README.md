# config-poc

A configuration POC (proof-of-concept) to demonstrate a strategy to store but not track application configurations
such as database connection settings and user credentials.  These settings are saved in an `.apprc` but not tracked
in Git.  The `.apprc-sample` file is included to represent application settings.

This sample application imports United States state data from a JSON file into a MySQL database.  A MySQL server 
connection is required.

## Setup

### Configure the `.apprc` file

1. `cp .apprc-sample .apprc`
1. Edit `.apprc`  
1. Add your settings

### Install dependencies

```bash
$ npm install
```

## Run

```bash
$ node import
```

## References

* [The Twelve-Factor App](https://12factor.net/)
* [Environment variable](https://en.wikipedia.org/wiki/Environment_variable)
* [INI File](https://en.wikipedia.org/wiki/INI_file)
* [Configuration file](https://en.wikipedia.org/wiki/Configuration_file)