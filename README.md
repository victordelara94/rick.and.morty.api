# Prueba técnica Rick and Morty

## Componentes

### 1.Layout

-Aquí he incorporado un header y un footer para dar estructura a la página, el resto como es la parte que cambiará según la página en la que nos hallemos se encuentra dentro de la etiqueta <main> y en su interior esta el <router-outlet> que diferenciara entre:

### 2.Home:

Componente que renderiza la lista de componentes CardComponent (cada uno de los personajes), recibe un evento desde PaginatorComponent, uno de sus hijos, en forma de EventEmitter<number> para modificar la página actual en el StoreService , HomeComponent cuenta con dos métodos:

1 El método onInit característico de angular, que se ejecuta en la construcción del componente, aquí llamo a la función `loadAllCharacters()` del StoreService (explicado más adelante);

2 El método `selectPage()` se ejecuta al recibir el EventEmitter del <up-paginator> y ejecuta varias funciones del StoreService (`setPage()`, `getFilter()`,`loadFilterCharacters()` y `loadAllCharacters()`).

#### 2.1.Filter:

Componente hijo de HomeComponent, consta de un <input> y un <select>, ambos con la directiva [(ngModel)] que se enlazará con el valor de la propiedad searchTerm en el <input> y con selectedStatus en el <select> del componente, ambos ejecutan el método `selectSearch()`

1. El método `selectSearch()` primero, setea la página a cero, para que cada vez que se cambie de filtro no se guarde la página en la que estamos y empiecé en la página inicial. Después por medio del condicional if, comprobará si el evento que lo ejecutó fue tipo change ejecutando así `setFilterActive()`con la `key:status` y el `value:<asignado en el select>`. Si no, ejecutará el mismo método del StoreService pero con `key:name` y el `value:<asignado en el input>` tras asignar el filtro de busqueda, ejecuta `loadFilterCharacters()`

#### 2.2.Card:

Componente hijo de HomeComponent, consta de varios <span> y una <img> mostrando los datos del personaje que le llega por `@inPut()` desde HomeComponent, y tiene como componente hijo <Up-update-form> que se renderiza condicionalmente mediante su propiedad isOpen <Boolean>, y un <button> que ejecuta `openForm()` uno de sus dos métodos:

1.`openForm()` cambia el valor de isOpen a true, mostrando el <up-update-form>

2.`closeForm()` cambia el valor de isOpen al valor recibido por un EventEmitter<Boolean> de UpdateFormComponent.

##### 2.2.1. UpdateForm:

Componente hijo/modal de CardComponent, consta de varios input y dos botones, uno que ejecuta `emitClose()` y otro `handleForm()` además de la propiedad character que recibe por `@input()` y event del tipo EventEmitter con el decorador `@Output()`

1.`emitClose()`que simplemente emite por medio de la propiedad event:EventEmitter<boolean> el valor false, para que desde CardComponent se cierre el <up-update-form>.

2. `handleForm()` ejecuta el método updateCharacters del StoreService con el valor almacenado en this.character que está vinculado por [(ngModel)] a cada input y ejecutada `emitClose()`;

#### 2.3.Paginator:

Componente hijo de HomeComponent, consta de dos <button> condicionales según la página en la que se esté. Tiene la propiedad eventPage del tipo EventEmitter con el decorador `@Output()` y page, donde guarda la página actual. Tiene un método que se ejecuta al hacer click en cualquiera de los <button>.

1. `setPage()` Emite un evento con +1 o -1 en función del <button> clickado.

### 3.Table:

Componente que renderiza una tabla con las propiedades destacadas de los personajes. A diferencia de todo HomeComponent con sus hijos, tiene un maquetado más básico para rapidamente visualizar las propiedades de cada personaje. En este caso cada <tr> de la <table> se renderiza con la directiva `@for(item of store.getAllCharacters()|async ; track item.id)` que ejecuta el método `getAllCharacters()` con el pipe asíncrono `|async`. El componente en su fichero de `.ts` queda muy simplificado al ejecutarse el método en el fichero `.html` simplemente tendrá un store:StoreService para ejecutar el método en el HTML y una propiedad characters para guardar el array de personajes.

#### 3.1 Summary Filter:

Componente hijo de TableComponent, se compone de un <input type="number"> y un <button> que ejecuta el método `handleClick()`. En este caso el componente tiene las propiedades: refInput con el decorador `@ViewChild()`, quantyty:number y el store al que se le inyecta StoreService. Sus métodos:

1. `ngOnInit()` En el que se ejecuta el método del StoreService`loadFirstCharacters(0)` para traer los 10 personajes que se piden de base (decidí poner 0 en lugar de 10, a juzgar como un valor null, ya que 10 es el valor por defecto exigido)

2. `handleClick():` Mediante `@ViewChild('refInput)` accedemos al elemento del DOM referido y asignamos su valor a la propiedad quantity, para así ejecutar `loadFirtsCharacters(this.quantity)` lo cuál permite elegir el número de personajes visualizados en la tabla.

## Servicios

He creado dos servicios con el decorador `@injectable()` de angular, que da lugar a clases singleton que son instanciadas una sola vez por angular, no es necesario hacer un new <ServiceName>, si no que se inyectan en otras clases bien en el `constructor(){}`o con `inject()`.

Resumiendo, el RepositoryService se ocupa de las llamadas a la API, con peticiones para traer todos los personajes, los filtrados por las propiedades name o status y otra peticion por ids para traer el número de personajes selecionado.

Por otro lado StoreService almacena el estado ejecutando los métodos del RepositoryService, guarda el número de la página actual y lo devuelve y lo mismo con el filtro actual(getters y setters)
