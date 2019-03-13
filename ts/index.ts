
import User from './User'
import UUID from 'uuid'

const user = new User('石川', '一太郎', 41);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

const genNumberButton = document.getElementById('gen-number')// as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
genNumberButton!.onclick = (e) => {
    uuidSpan.innerText = UUID.v4();
};