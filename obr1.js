
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        ctx.lineWidth = 2;



        // 1 RYSUNEK
         
        // LEWY ZEWN WIĘKSZY
        ctx.beginPath();
        ctx.arc(150, 200, 70, 0.48 * Math.PI, 1.52 * Math.PI, false); 
        ctx.stroke();

        // PRAWY ZEWN WIĘKSZY
        ctx.beginPath();
        ctx.arc(250, 200, 100, 1.402 * Math.PI, 0.6 * Math.PI, false); 
        ctx.stroke();

        // LEWY ZEWN MNIEJSZY
        ctx.beginPath();
        ctx.arc(150, 200, 50, 0.5 * Math.PI, 1.51 * Math.PI, false); 
        ctx.stroke();

        // PRAWY ZEWN MNIEJSZY
        ctx.beginPath();
        ctx.arc(250, 200, 80, 1.456 * Math.PI, 0.54 * Math.PI, false); 
        ctx.stroke();

        // GÓRNY WEWN 8 
        ctx.beginPath();
        ctx.arc(200, 150, 50, 0, 2 * Math.PI);
        ctx.stroke();

        // DOLNY WEWN 8
        ctx.beginPath();
        ctx.arc(200, 250, 50, 0, 2 * Math.PI);
        ctx.stroke();

        // MAŁE KÓŁKO W ŚRODKU 8 GÓRA
        ctx.beginPath();
        ctx.arc(200, 150, 38, 0, 2 * Math.PI); 
        ctx.stroke();

        //MAŁE KÓŁKO W ŚRODKU 8 DÓŁ
        ctx.beginPath();
        ctx.arc(200, 250, 38, 0, 2 * Math.PI); 
        ctx.stroke();

        // LINIA MIĘDZY KÓŁKAMI 
        ctx.beginPath();
        ctx.moveTo(200, 111); 
        ctx.lineTo(200, 220); 
        ctx.stroke();

        // PROMIENIE W KÓŁKU GÓRA
        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.lineTo(237, 150); // PRAWO

        ctx.moveTo(200, 150);
        ctx.lineTo(161, 150); // LEWO

        ctx.moveTo(200, 150);
        ctx.lineTo(200, 185); // DÓŁ

        ctx.moveTo(200, 150);
        ctx.lineTo(200, 115); // GÓRA

        ctx.moveTo(200, 150);
        ctx.lineTo(225, 180); // PRAWO-DÓŁ

        ctx.moveTo(200, 150);
        ctx.lineTo(175, 180); // LEWO-DOL

        ctx.moveTo(200, 150);
        ctx.lineTo(225, 120); // PRAWO-GÓRA

        ctx.moveTo(200, 150);
        ctx.lineTo(175, 120); // LEWO-GÓRA
        ctx.stroke();

        // PROMEINIE W KÓŁKU DÓŁ
        ctx.beginPath();
        ctx.moveTo(200, 250);
        ctx.lineTo(237, 250); // PRAWO

        ctx.moveTo(200, 250);
        ctx.lineTo(161, 250); // LEWO

        ctx.moveTo(200, 250);
        ctx.lineTo(200, 285); // DÓB

        ctx.moveTo(200, 250);
        ctx.lineTo(200, 215); // GÓRA

        ctx.moveTo(200, 250);
        ctx.lineTo(225, 280); // PRAWO-DÓŁ

        ctx.moveTo(200, 250);
        ctx.lineTo(175, 280); // LEWO-DOL

        ctx.moveTo(200, 250);
        ctx.lineTo(225, 220); // PRAWO-GÓRA

        ctx.moveTo(200, 250);
        ctx.lineTo(175, 220); // LEWO-GÓRA
        ctx.stroke();

        //2 RYSUNEK
        // KWADRAT
        ctx.beginPath();      
        ctx.rect(460, 520, 120, 180); // przesunięcie o 100 jednostek w prawo i 50 jednostek do góry
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // GÓRA TRÓJKĄT
        ctx.beginPath();
        ctx.moveTo(580, 520); // przesunięcie o 100 jednostek w prawo i 50 jednostek do góry
        ctx.lineTo(460, 520);
        ctx.lineTo(525, 450);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // DÓŁ TRÓJKĄTY (lewy)
        ctx.beginPath();
        ctx.moveTo(495, 700); // przesunięcie o 100 jednostek w prawo i 50 jednostek do góry
        ctx.lineTo(475, 730);
        ctx.lineTo(515, 730);
        ctx.closePath();
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // DÓŁ TRÓJKĄTY (prawy)
        ctx.beginPath();
        ctx.moveTo(545, 700); // przesunięcie o 100 jednostek w prawo i 50 jednostek do góry
        ctx.lineTo(525, 730);
        ctx.lineTo(565, 730);
        ctx.closePath();
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // OKNA (górne)
        ctx.beginPath();
        ctx.arc(520, 570, 25, 0, 2 * Math.PI, false); // przesunięcie o 100 jednostek w prawo i 50 jednostek do góry
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // OKNA (dolne)
        ctx.beginPath();
        ctx.arc(520, 645, 25, 0, 2 * Math.PI, false); // przesunięcie o 100 jednostek w prawo i 50 jednostek do góry
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // CHUJ WIE CO TO PSYCHA SIADA
        ctx.beginPath();
        ctx.moveTo(525, 450); 
        ctx.lineTo(490, 370);
        ctx.lineTo(525, 330);
        ctx.lineTo(560, 370);
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(525, 450);  
        ctx.lineTo(525, 330);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(520, 435);  

        ctx.moveTo(510, 420);
        ctx.lineTo(535, 420);

        ctx.moveTo(505, 405);
        ctx.lineTo(540, 405);

        ctx.moveTo(500, 390);
        ctx.lineTo(550, 390);

        ctx.moveTo(495, 375);
        ctx.lineTo(555, 375);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(490, 370); 
        ctx.lineTo(525, 435);

        ctx.moveTo(560, 370);
        ctx.lineTo(525, 435);

        ctx.moveTo(490, 370);
        ctx.lineTo(525, 420);

        ctx.moveTo(560, 370);
        ctx.lineTo(525, 420);

        ctx.moveTo(490, 370);
        ctx.lineTo(525, 405);

        ctx.moveTo(560, 370);
        ctx.lineTo(525, 405);
        ctx.stroke();


        //3 RYSUNEK


        ctx.beginPath();
        ctx.moveTo(900, 300); 
        
        ctx.bezierCurveTo(750, 250, 700, 400, 900, 450); 
        ctx.bezierCurveTo(1100, 400, 1050, 250, 900, 300); 
        
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.stroke();
        

        //main kółko
        ctx.beginPath();
        ctx.arc(900, 375, 11, 0, 3 * Math.PI); 
        ctx.stroke();
        //main mniejsze
        ctx.beginPath();
        ctx.arc(900, 375, 4, 0, 3 * Math.PI); 
        ctx.stroke();
        //dół kółko
        ctx.beginPath();
        ctx.arc(900, 398, 11, 0, 3 * Math.PI); 
        ctx.stroke();
        //dół mniejsze
        ctx.beginPath();
        ctx.arc(900, 398, 4, -1, 1 * Math.PI); 
        ctx.stroke();
        //góra kółko
        ctx.beginPath();
        ctx.arc(900, 352, 11, 0, 3 * Math.PI); 
        ctx.stroke();
        //góra kółko mniejsze 
        ctx.beginPath();
        ctx.arc(900, 352, 4, 2, 2 * Math.PI); 
        ctx.stroke();
        //lewo
        ctx.beginPath();
        ctx.arc(878, 375, 11, 0, 3 * Math.PI); 
        ctx.stroke();
         //lewo mniejsze
         ctx.beginPath();
         ctx.arc(878, 375, 4, 1 , 2 * Math.PI); 
         ctx.stroke();
        //prawo
        ctx.beginPath();
        ctx.arc(922, 375, 11, 0, 3 * Math.PI); 
        ctx.stroke();
        //prawo mniejsze
         ctx.beginPath();
         ctx.arc(922, 375, 4, -1, 1 * Math.PI); 
         ctx.stroke();
        //lewy gora
        ctx.beginPath();
        ctx.arc(879, 353, 11, 2, 2 * Math.PI); // 315 + 400
        ctx.stroke();
        //lewy gora male
        ctx.beginPath();
        ctx.arc(879, 353, 4, 1, 2 * Math.PI); // 315 + 400
        ctx.stroke();
        //prawo gora
        ctx.beginPath();
        ctx.arc(921, 353, 11, 0, 4 * Math.PI); // 315 + 400
        ctx.stroke();
        //prawo gora male
        ctx.beginPath();
        ctx.arc(921, 353, 4, 2, 2 * Math.PI); // 315 + 400
        ctx.stroke();
        //dół kółko
        ctx.beginPath();
        ctx.arc(879, 397, 11, 12, 1.5  * Math.PI); 
        ctx.stroke();
        //dół mniejsze
        ctx.beginPath();
        ctx.arc(879, 397, 4, -1, -1 * Math.PI); 
        ctx.stroke();
        //kolejne dół prawo
        ctx.beginPath();
        ctx.arc(921, 397, 11, 0, 3 * Math.PI); 
        ctx.stroke();
        //dół mniejsze prawo
        ctx.beginPath();
        ctx.arc(921, 397, 4, -1, -1 * Math.PI); 
        ctx.stroke();

        // Strzała górna część
        ctx.beginPath();
        ctx.moveTo(970, 320); 
        ctx.lineTo(1020, 290); 
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1020, 290); 
        ctx.lineTo(1040, 285); 
        ctx.moveTo(1020, 290);
        ctx.lineTo(1040, 274); 
        ctx.stroke();

        // Strzała dół
        ctx.beginPath();
        ctx.moveTo(840, 400); 
        ctx.lineTo(790, 430);  

        ctx.moveTo(790, 430); 
        ctx.lineTo(798, 440); 

        ctx.moveTo(790, 430); 
        ctx.lineTo(783, 420); 

        ctx.moveTo(783, 420); 
        ctx.lineTo(778, 440); 

        ctx.moveTo(798, 440); 
        ctx.lineTo(778, 440); 
        ctx.stroke();

        // SSMANKI
        ctx.beginPath();
        ctx.moveTo(820, 330); // 250 + 400
        ctx.lineTo(810, 340); // 240 + 400
        ctx.moveTo(810, 340); // 240 + 400
        ctx.lineTo(820, 340); // 250 + 400
        ctx.moveTo(820, 340); // 250 + 400
        ctx.lineTo(810, 350); // 240 + 400
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1000, 380); // 420 + 400
        ctx.lineTo(990, 390); // 410 + 400
        ctx.moveTo(990, 390); // 410 + 400
        ctx.lineTo(1000, 390); // 420 + 400
        ctx.moveTo(1000, 390); // 420 + 400
        ctx.lineTo(990, 400); // 410 + 400
        ctx.stroke();




