a=[1,2,6,4,undefined,3];
for(i=0;i<=5;i++)
{
    console.log(a[i]);
}
console.log();
for(j in a)
{
    console.log(j);
}
console.log();
for(k of a)
{
    console.log(k);
}