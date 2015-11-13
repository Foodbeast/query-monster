query-monster
=============

A simple tool for building search queries for Javascript on the client or server side.

Returns an array of terms, filtered for stopwords, and an array of exact phrases from single or double quotes.

## Installing ##

```javascript
npm i --save query-monster
```

## In Browser ##

```javascript
<script src="../dist/query-monster.js"></script>
```

## In Node ##

```javascript
var monsta = require('query-monster');
```

## Usage ##

```javascript
var monster = QM;

var result monsta.crush('new habanero pizza at "pizza hut"');

```

## Result ##
```
{
  "query": "new habanero pizza at \"pizza hut\"",
  "phrases": [
    "pizza hut"
  ],
  "terms": [
    "habanero",
    "pizza"
  ]
}
```

## Dependencies ##
[lodash](https://github.com/lodash/lodash) for _.reject