var FD = document.getElementById("output_area");

function fadein() {
    fade = setInterval(function()
	
	{
        if (parseFloat(FD.style.opacity) < 1) 
		
		{	
        FD.style.opacity =  parseFloat(FD.style.opacity) + 0.002;
        }
			
    }

					  );
				   }


