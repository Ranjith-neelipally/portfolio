
function Marquee() {
   const items = [
     "shipping > planning",
     "products > technologies",
     "problems > buzzwords",
     "story > skills",
     "less > more",
     "boring tech, useful outcomes",
   ];
   const row = [...items, ...items];
   return (
     <div className="border-t border-border bg-surface/40 py-4">
       <div className="flex w-max marquee gap-12 px-6 font-mono-x text-xs uppercase tracking-[0.25em] text-muted-foreground">
         {row.map((t, i) => (
           <span key={i} className="flex items-center gap-12">
             <span>{t}</span>
             <span className="text-accent">✦</span>
           </span>
         ))}
       </div>
     </div>
   );
}

export default Marquee