query-monster
=============

A simple tool for building search queries for Javascript on the client or server side.

Returns an array of terms, filtered for stopwords, and an array of exact phrases from single or double quotes.

## Usage ##

```javascript
var monster = QM;

monster.query = 'new items at "pizza hut"';

var result = monster.crush();
```

## Result ##
```
{ 
  "query": "new items at \"pizza hut\"", 
  "phrases": [ "pizza hut" ], 
  "terms": [ "items" ] 
}
```

## Dependencies ##
[lodash](https://github.com/lodash/lodash) for _.reject