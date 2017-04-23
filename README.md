# config-poc

A configuration POC (proof-of-concept) to demonstrate a strategy to store but not track application configurations
such as database connection settings and user credentials.  These settings are saved in an `.apprc` but not tracked
in Git.  The `.apprc-sample` file is included to represent application settings.

The `import.js` application uses the [rc](https://www.npmjs.com/package/rc) node module to load and parse the `.apprc`
configuration file.  *rc* will parse either [INI](https://en.wikipedia.org/wiki/INI_file) and [JSON](http://json.org/example) 
formatted files.  A INI file format is used in this example.

The `import.js` will default to _development_, if no NODE_ENV is set.  Set your environment variable to alter the behavior.

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

### Testing a different NODE_ENV

```bash
$ NODE_ENV=test node import
```

## References

* [Where to Set Environment Variables in Mac OS X](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/)
* [Windows - Environment Variables](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682653%28v=vs.85%29.aspx?f=255&MSPPError=-2147217396)

* [The Twelve-Factor App](https://12factor.net/)
* [Environment variable](https://en.wikipedia.org/wiki/Environment_variable)
* [INI File](https://en.wikipedia.org/wiki/INI_file)
* [Configuration file](https://en.wikipedia.org/wiki/Configuration_file)