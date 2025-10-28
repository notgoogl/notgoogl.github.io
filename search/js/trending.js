const trending = [
`- How to politely ask your shadow to leave`,
`- Best recipes for slightly soggy cookies`,
`- Local bridges that move at midnight`,
`- Streets that may or may not know your name`,
`- Why the sun stopped yesterday`,
`- Tips for negotiating with houseplants`,
`- How to fold your laundry in another dimension`,
`- The tree that speaks in reverse`,
`- Signs that your reflection is keeping secrets`,
`- Why the grass does not respect Quiet Hours`
    ];

const trending2 = [
`- How to politely ask your shadow to leave`,
`- Best recipes for slightly soggy cookies`,
`- Local bridges that move at midnight`,
`- Streets that may or may not know your name`,
`- Why the sun stopped yesterday`,
`- Instructions for whispering into cracks under doors`,
`- The bench in town square that unties shoes`,
`- Local clocks occasionally forget minutes`,
`- Recipes for soup that remembers last Wednesday`
    ];

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('trending').innerText = "" + randomElement(trending);
document.getElementById('trending2').innerText = "" + randomElement(trending2);