lessVerController
===================================

Clear a less verion cache by storage, if you want to use `.less` on production.

## Install

```bash
bower install less-ver-controller
```

## Install node modules

```bash
npm install
```

## Dependencies

* [less.js](http://lesscss.org/)

## Support

* IE8+
* chrome
* firefox

## Usage

Set a ver by `lessVerController.ver()`, it will auto-remove cache.

```html
<script src="lessVerController.js"></script>
<script>lessVerController.ver("v0.0.1")</script> 
<link rel="stylesheet/less" type="text/css" href="index.less">
<script>                                
less = {                                
  env:"production"                      
}                                       
</script>                               
<script src="less.js/dist/less-1.7.5.min.js "></script>
```

## DEMO

```bash
gulp server
```

## Build

```bash
gulp
```

