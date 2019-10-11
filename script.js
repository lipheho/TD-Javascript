// JavaScript Document


	var rand ='';
	function alea()
	{
		rand = Math.floor(Math.random() * 101);
		document.getElementById('nbrand').innerHTML = rand;
	}

function deviner()
    {
		var x1 = document.getElementById('x1').value;
        alert('nombre entré '+ x1);

        if (x1 > rand)
            {
                alert('Nombre trop grand'); 
            }
		else if (x1 < rand)
                    {
                        alert('Nombre trop petit');
                    }
        else 
            {
                alert('Nombre trouvé');
            }
    }
	
