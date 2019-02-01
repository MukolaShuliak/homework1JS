function Calculate() {
   const a = parseFloat(frm.a.value);
   const b = parseFloat(frm.b.value);
   const c = parseFloat(frm.c.value);
   let x1, x2, d;
   const result = '';
   d = b*b - 4*a*c;
 alert('D = ' + d);
   if (d < 0) {
   const result = 'Рівняння не має коренів';
    alert(result);
    breake;
   };
   if (d = 0) {result = 'Рівняння має 1 корінь'};
   if (d > 0) {result = 'Рівняння має 2 корення'};
 alert(result);
   x1 = (-b - Math.sqrt(d))/(2*a);
   x2 = (-b + Math.sqrt(d))/(2*a);
    alert('x1 = ' + x1);
 alert('x2 = ' + x2);
}