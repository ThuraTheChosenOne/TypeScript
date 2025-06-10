console.log(this);
const student = {
    info() {
        console.log(this);
    }
};
student.info();
class Student {
    content() {
        console.log(this);
    }
}
const studentObj = new Student();
console.log(studentObj);
studentObj.content();
function sayhi(name, msg) {
    console.log(this);
    console.log(`Hay...${name} .${msg}`);
}
sayhi("su su", "How are you doing?");
sayhi.call({ name: 'Yu Yu' });
sayhi.call("yu yu", "how are you doing?");
sayhi.call({ fullname: "nu nu" }, "aye aye", "how are you?");
sayhi.apply({ name: 'Yu Yu' });
sayhi.apply({ fullname: "nu nu" }, ['kyaw kyaw', 'yo? whats up nigga?']);
let bindfun = sayhi.bind({ fullname: "ko ko" }, "mu mu", "how are you?");
bindfun();
