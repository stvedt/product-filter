# Ingredient Filtering

To run locally

```bash
npm install
npm start
```

Will run on [http://localhost:3000/](http://localhost:3000/)

## Next Steps

Some things I would do to continue solving this in a more robust way:
I would allow for multiple ingredients to be selected at once. I would push the ingredient_id to an array more specifically a set to then filter over any products that include any element in that array. With 26 ingredients this seems reasonable performance wise. If the input of ingredients or products increased greatly I would look at creating using a map to prevent having to loop through an array to find each.

I would explore displaying the ingredients. This would require a relational tie by the ids. If this was a requirement I'd explore transforming the data into a map so we can do quick lookups and pass that through to my productDetail as a prop.

If I had redux I would consider leveraging selectors to help with derived state and manage the filtered list.