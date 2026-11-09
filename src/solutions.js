"use strict";
const multiplyValue = (value, multiplier) => {
    const result = multiplier === undefined ? 2 : multiplier;
    return value * result;
};
multiplyValue(10, 5);
const processInput = (value) => {
    switch (typeof value) {
        case "string":
            return value.trim().toLowerCase();
        case "number":
            return value * 10;
        case "boolean":
            return value ? "Active" : "Inactive";
    }
};
processInput(" TypeScript ");
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName}, (${latitude}, ${longitude})`;
};
formatCoordinate([23.81, 90.41, "Dhaka"]);
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
concatenateArrays(["a", "b"], ["c", "d"]);
const getPopularCourses = (course, minStudents) => {
    const newCourseArr = [];
    for (const elem of course) {
        if (elem.isPublished && elem.students >= minStudents) {
            newCourseArr.push(elem);
        }
    }
    return newCourseArr;
};
const courseArr = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
getPopularCourses(courseArr, 80);
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
pluckValues(users, 'name');
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 5000, "Engineering");
manager.getDetails();
manager.getRoleInfo();
const validateAgeAsync = async (age) => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
};
validateAgeAsync(20);
