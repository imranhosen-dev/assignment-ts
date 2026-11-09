## Access Modifiers in TypeScript OOP

Access modifier is a class property and method access modifier. Typescript produces access modifiers that can be public, private, protected and readonly. Access modifier is used to create object-oriented programming (oop) code that is clean, readable, and maintainable.

- `public`

Public properties can be accessed from anywhere. In TypeScript, if no access modifier is specified, a property is considered public by default.

```typescript
class Employee {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

- `private`

Private properties are declared only within a class and can be accessed from inside that class. They cannot be accessed from outside the class.

- `protected`
  A 'protected' property is declared within a class. It can be accessed from the class itself, as well as from its subclasses or child classes.

```typescript
class Employee {
    protected department = "Engineering";
    private salary: number;

    constructor(
        public name: string,
        salary: number,
    ) {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    getDepartment(): string {
        return this.department;
    }
}
```

- `readonly`
  When the `readonly` modifier is used, a property can be initialized once, but it cannot be assigned a value thereafter. Although a value can be assigned within the constructor, no further assignments are permitted.

```typescript
class Manager {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}
```

## Conclusion

In TypeScript `oop`, property access can be controlled by using various types of access modifiers.

- `public`: It is possible to access any part of it, whether inside or outside the class.
- `private`: It is used only inside the classroom.

- `protected`: It can also be accessed from the class or its subclasses.

- `readonly`: It is used to prevent a value from being assigned to a property.
