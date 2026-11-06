let Today=new Date()
let year=Today.getFullYear()
let month=Today.getMonth()

let numberOfDays=new Date(year,month+1 , 0).getDate()

let monthDays=[]
for (let day = 1; day <= numberOfDays; day++) {
    let date=new Date(year ,month ,day)
    let formatedDate=date.getFullYear() + '-' +
        String(date.getMonth() + 1).padStart(2, '0') + '-' +
        String(date.getDate()).padStart(2, '0');

    monthDays.push(formatedDate)
}

export default monthDays