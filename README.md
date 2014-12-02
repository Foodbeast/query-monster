query-monster
=============

A simple tool for building search queries in Javascript.

## Usage ##

```javascript
var search = QM;

search.query = 'new items at "pizza hut"';

var result = s.find();
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