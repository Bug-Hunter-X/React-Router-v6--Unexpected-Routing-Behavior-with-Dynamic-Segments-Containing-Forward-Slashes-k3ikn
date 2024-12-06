The solution involves using URL encoding to escape the forward slashes in the dynamic segment.  Here's how you can modify the component to handle this:

```javascript
import { useParams, useLocation } from 'react-router-dom';

function ProductDetails() {
  let params = useParams();
  let location = useLocation();
  let productId = decodeURIComponent(params.id);

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      <p>Current Location: {location.pathname}</p>
    </div>
  );
}

// Route definition remains the same
<Route path='/products/:id' element={<ProductDetails />} />
```

This ensures that the `productId` is correctly decoded, resolving the routing issue. Alternatively, consider redesigning the URL structure to avoid slashes in the dynamic segment or using a different approach for representing hierarchical data within route parameters.