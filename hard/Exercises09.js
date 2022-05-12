function search_word(text, word){    
    var x = 0, y=0;   
    for (i=0;i< text.length;i++) {
        if(text[i] == word[0]) {
            for(j=i;j< i+word.length;j++) {
                if(text[j]==word[j-i]) {
                    y++;
                  }
                if (y==word.length) {
                  x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' xuat hien " + x + " lan.";
}
console.log(search_word('that su hom nay em rat muon nghi nhung em khong co tien nen em lai di lam kiem tien', 'em'));