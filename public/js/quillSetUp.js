 //initialize the quill editor with desired fonts
 const Font=Quill.import('formats/font');
 Font.whitelist=['Poppins', 'Roboto','Verdana','Open Sans', 'sans-serif'];
 
 
 const quillOptions = {
     theme: 'snow',
     modules: {
       toolbar: [
         [{ 'font': Font.whitelist }, { 'size': [] }],
         ['bold', 'italic', 'underline', 'strike'],
         [{ 'color': [] }, { 'background': [] }],
         [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' },{ 'header': '4' },{ 'header': '5' },{ 'header': '6' }, 'blockquote', 'code-block'],
         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
         [{ 'direction': 'rtl' }],
         [{ 'align': [] }],
         ['clean'] // remove formatting button
       ]
     }
   };
 
 
 Quill.register(Font,true);
 
 
 export function createQuillEditor(qlcontainer, options={}) {
   // ... create Quill instance
   // console.log(options);
   if (typeof options ==='undefined' || Object.keys(options).length ===0){
     options=quillOptions;
   }
   const quill = new Quill(qlcontainer, options);
   quill.format('font','Poppins');
   return quill;
 }