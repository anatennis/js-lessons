let garden = new Garden();
console.log(garden);
console.log(garden._trees[0]._apples[0]);
/*console.log(garden.getCountTrees());
console.log(garden.getCounApples());*/
garden.passDay(); // прошли одни сутки
console.log(garden);
garden.passDay(); // прошли одни сутки
console.log(garden);
garden.passDay(); // прошли одни сутки
console.log(garden.getCounApples()); // получить список висящих яблок на деревьях





/*garden.passDay(); // прошли одни сутки
garden.getCountApples(); // получить список висящих яблок на деревьях этого сада деревьях
garden.passDay(); // прошли одни сутки
garden.getCountApples();*/

/*И задание 3, если будет скучно (задачка с собеседования)
Реализовать объектную модель: Яблоко, Дерево, Сад

Программа должна уметь добавлять деревья в сад.
    Яблоки на деревья.
    Возвращать информацию о количестве деревьев и яблок.

    Сад - это объект со списком объектов деревьев.
    Дерево - это объект со списком объектов яблок.

    Яблоки должны иметь определяться:
    -возрастом
    -цветом
    -размером
    -флаг испорченности (0 - свежее, 1 - испорченное)
-флаг упавшего с дерева (0 - на дереве, 1 - упало)

Яблоки имею методы:
    -упасть с дерева
-испортиться

У всего сада есть возраст (например количество суток).
Каждые 30 суток на каждом дереве рождается новое яблок.
    Все яблоки каждые сутки стареют на 1 день.
    Яблоки падают с дерева при возрасте 30 дней.
    Можно усложнить - 50% яблок могут упасть через 28 или через 32 дня по случайному выбору.
    Яблоки портятся, после падения через сутки

Сад имеет метод:
    просчитать 1 сутки (т.е. метод, который фиксирует прохождение суток)

Остальные методы и атрибуты объектов необходимо предусмотреть и реализовать.

    Пример результирующего кода:

    garden = new Garder(); // создать сад, может быть создано N деревьев с N2 яблоками на каждом (N и N2 любые числа не
// больше 100, все яблоки при инцициализации создаются со случайным возрастом от 0 до 30)

garden.passDay(); // прошли одни сутки
garden.passDay(); // прошли одни сутки
garden.passDay(); // прошли одни сутки
garden.getCountApples(); // получить список висящих яблок на деревьях
garden.passDay(); // прошли одни сутки
garden.getCountApples(); // получить список висящих яблок на деревьях этого сада деревьях
garden.passDay(); // прошли одни сутки
garden.getCountApples(); // получить список висящих яблок на деревьях этого сада
В задании могут быть добавлены иные условия и возможности, если исполнителю будет интересно его усложнить
(добавить время года, погоду и т.п. влияющие на рост/падение яблок, каждое упавшее яблоко может превращаться в
новое дерево через время, следить за удалением яблок из массива, после того как они испортились и т.п.).*/
