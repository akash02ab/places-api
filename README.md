# Create POST request

## URL : http://localhost:8080/places

```js
    {
        "name": "Kolaba Fort",
        "city": "Ali Bagh",
        "state": "Maharashtra"
    }
```

-   Slug will be automatically created using `name`

<br>

# GET specific place using slug

## URL : http://localhost:8080/places/slug/kolaba-fort

<br>

# GET places by applying filters

## URL : `http://localhost:8080/places?name=Kolaba%20Fort&city=Ali%20Bagh`
