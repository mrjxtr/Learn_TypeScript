let user: string = prompt("Enter a name: ") || "";
let greeting: string = prompt("Enter a greeting: ") || "";

function greetHello(greeting: string, user: string): string {
    let greet = greeting + "" + user;
    console.log(greet);

    return greet;
}

greetHello(greeting, user);
