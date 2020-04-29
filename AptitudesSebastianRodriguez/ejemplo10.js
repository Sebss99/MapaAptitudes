

//crea una tabla que guarda los datos del archivo .csv
let table; 

//se crea un arreglo
let bubbles = []; 

//numero de filas en el archivo
let rowCount;

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/data.csv", "header");
}


function setup() 
{
    canvas = createCanvas(800, 800);
    canvas.position(550, 90);

  
  //numero de filas en el archivo
  rowCount = table.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table.getRows();  

  for (let i = 0; i < rowCount; i++) 
  {
    //guardamos la información de la fila "x" en una constante
    const x = row[i].getNum("x");
    //guardamos la información de la fila "y" en una constante
    const y = row[i].getNum("y");
    //guardamos la información de la fila "diameter" en una constante
    const diameter = row[i].getNum("diameter");
    //guardamos la información de la fila "name" en una constante
    const name = row[i].getString("name");

      const x1 = row[i].getNum("x1");
      const y1 = row[i].getNum("y1");
      const x2 = row[i].getNum("x2");
      const y2 = row[i].getNum("y2");
      const x3 = row[i].getNum("x3");
      const y3 = row[i].getNum("y3");
      const x4 = row[i].getNum("x4");
      const y4 = row[i].getNum("y4");
      const r = row[i].getNum("r");
      const g = row[i].getNum("g");
      const b = row[i].getNum("b");


    //Adiciono al arreglo un objeto de tipo Bubble, donde inicializo el objeto creando la Burbuja
    bubbles.push(new Bubble(x, y, diameter, name,x1,y1,x2,y2,x3,y3,x4,y4,r,g,b));
    //se crean la cantidad de burbujas acorde a la cantidad de datos
  }

}


function draw() 
{
  background(0);
    text("Santafé",204 ,303);
    text("Kenedy", 398, 181);
    text("Usme", 592, 303);
    text("Bosa", 592, 502);
    text("Ciudad Verde", 398, 605);
    text("Mártires", 206, 501);


    stroke(255);
    strokeWeight(2);
    line(398, 398, 398, 230);
    line(398, 398, 545, 314);
    line(398, 398, 545, 483);
    line(398, 398, 251, 314);
    line(398, 398, 398, 230);
    line(398, 398, 398, 568);
    line(398, 398, 251, 483);

    noFill();
    strokeWeight(3);
    beginShape();
    vertex(398, 230);
    vertex(545, 314);
    vertex(545, 483);
    vertex(398, 568);
    vertex(251, 483);
    vertex(251, 314);
    vertex(398, 230);
    endShape();


   

  //se recorre la cantidad de burbujas, que es lo mismo que recorrer la cantidad de datos
  //for (let i = 0; i < bubbles.length; i++)
  for (let i = 0; i < rowCount; i++) 
  {
  	//recorre cada burbuja y llama a la función dibujar para mostrarla
    bubbles[i].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[i].mouseOver(mouseX, mouseY);
  } 
}


// clase Bubble 
class Bubble 
{
  //se determinan los variables del objeto
  constructor(x, y, diameter, name,x1,y1,x2,y2,x3,y3,x4,y4,r,g,b,localidad,alto,ancho) 
  {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.name = name;
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.x3 = x3;
      this.y3 = y3;
      this.x4 = x4;
      this.y4 = y4;
      this.r = r;
      this.g = g;
      this.b = b;
      this.localidad = localidad;
      this.alto = alto;
      this.ancho = ancho;

    this.over = false;
  }

  //se crea la función donde se determina si el mouse esta encima de la burbuja, le entra como para metro mouseX y mouseY
  mouseOver(px, py) 
  {
  	//distancia que hay entre la posición del mouse y la burbuja
    let distancia = dist(px, py, this.x, this.y);

    //si la distancia entre el mouse y la burbuja es cercana
    if(distancia < 20)
    {
    	// entonces la variable over pongala en true
    	this.over = true;	
    }
    //si la distancia entre el mouse y la burbuja es lejana
    else
    {   
    	// entonces la variable over pongala en false
    	this.over = false;
    }   
  }

  //muestra la burbuja
  dibujar() 
  {
    stroke(255);
    strokeWeight(0.8);
      noFill();

    //dibuja la burbuja segun los datos obtenidos del archivo en el setup
      ellipse(this.x, this.y, this.diameter, this.diameter);
     

    //si la variable over es igual a true, es decir, si esta cerca a la burbu ja  
    if (this.over == true) 
    {
      fill(255);
      textAlign(CENTER);
        //coloca el texto del dato mas abajo de la burbuja
        
        text(this.name, this.x, this.y + 40);
        noStroke();
        fill(this.r, this.g, this.b);
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        vertex(this.x3, this.y3);
        vertex(this.x4, this.y4);
        endShape();


    }
  }
}
