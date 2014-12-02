query-monster
=============

A simple tool for building search queries for Javascript on the client or server side.

Returns an array of terms, filtered for stopwords, and an array of exact phrases from single or double quotes.

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