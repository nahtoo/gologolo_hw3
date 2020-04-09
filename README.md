# Example Queries

## Mutations

### Add New Logo

```javascript
mutation {
  addLogo(text: "test", color: "black", backgroundColor: "blaclk", 
    borderColor: "black", fontSize: 12, borderWidth: 13, borderRadius: 3, 
    padding: 13, margin: 10) {
    text
  }
}
```