# Core Differences Between Type Aliases and Interfaces in TypeScript

TypeScript provides two main ways to define custom shapes for objects and data structures: `type` aliases and `interface` declarations. While both often achieve similar results, key technical differences dictate when to use each.

### Core Different

- interface: In TypeScript, using the same name for multiple interfaces does not result in any type errors because the interfaces are merged. To extend multiple interfaces in TypeScript, the `extends` keyword is used.

- type: Using the same name for multiple type aliases will result in a type error. A type alias is essentially a specific name assigned to a type, which helps keep the code clean and makes it much easier to maintain.

```typescript
// Declaration Merging (Interfaces only)
interface User {
    name: string;
}
interface User {
    age: number;
} // Merged automatically

// Type Alias with Union and Intersection
type Role = "admin" | "user";
type Profile = { id: string } & { role: Role };
```

### When to Choose Which?

`Interface`
When you need to define an object, class, API, or structure, you can easily specify its type and define its structure using an interface.

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin extends User {
    role: string;
    permissions: string[];
}

const admin: Admin = {
    id: 1,
    name: "Imran",
    email: "imran@gmail.com",
    role: "admin",
    permissions: ["read", "write"],
};
```

`type`When you need to define complex types or combine multiple types, it is best to use type aliases.

```typescript
type Status = "success" | "error" | "loading";

let status: Status = "success";
```

## Conclusion

In TypeScript, both type aliases and interfaces can be used to create custom types. Generally, it is better to use interfaces for defining object structures, classes, or extensible data models. On the other hand, type aliases are more suitable for creating unions, tuples, or complex types. We must keep in mind that our primary goal is to write clean, reusable, and maintainable code.