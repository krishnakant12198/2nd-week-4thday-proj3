for(let i=0; i<100; i++){ 
    console.log(i+1) 
}  
//Exercise 2 
const base = 5; 
const power = 7; 
var ans=1; 
for(let i=0; i<power; i++){ 
    ans*=base; 
} 
console.log(ans); 
//Exercise 3 
var num=2345; 
var sum=0; 
while(num>0){ 
    sum+=(num%10); 
    num=Math.floor(num/10); 
} 
console.log(sum)

