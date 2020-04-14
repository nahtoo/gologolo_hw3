# Example Queries

## Mutations

### Adding New Logo

```graphql
mutation {
  addLogo(text: "test", color: "black", backgroundColor: "black", 
    borderColor: "black", fontSize: 12, borderWidth: 13, borderRadius: 3, 
    padding: 13, margin: 10) {
    text
  }
}
```

### Deleting a Logo

```graphql
mutation {
  removeLogo(id: "5e8e7f242c3d9614d53807c3") {
    _id
    text
  }
}
```

### Updating a Logo
```graphql
mutation {
  updateLogo(id: "5e9110230ffbfc26be3da7c9", text: "test2", color: "black",
  backgroundColor: "black", borderColor: "black", borderWidth: 3, borderRadius: 3,
  margin: 10, padding: 12, fontSize: 3) {
    text
  }
}
```

## Queries 

### Querying for All Logos

```graphql
{
  logos {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderWidth
    borderRadius
    padding
    margin
    lastUpdate
  }
}
```

### Querying for Specific Logo

```graphql
{
  logo(id: "5e9110230ffbfc26be3da7c9") {
    text
    fontSize
    color
  }
}
```