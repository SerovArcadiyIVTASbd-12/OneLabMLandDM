var mass1, mass2;
var error;

function coutElement(mass, element) {
    let cout = 0;
    for(let i = 0; i < mass.length; i++ )
    {
        if(mass[i] == element)
        {
            cout++;
        }
    }
    return cout;

}
/* Функция проверки ввода*/
function validate(str)
{
    var pruf;
    let mass = false;
    var result = "";
    if(str.length>0)
    {
        mass = str.split(" ");



        //проверяем нечётные цифры
        for(let i = 0; i < mass.length; i++)
        {
            pruf = mass[i][0] / 2;
            if((mass[i][0]%2) === 0)
            {
                error = "Ошибка при вводе массива " +str+ " в элементе " +mass[i];
                mass = false;
            }
        }
        //просто цифры
        for(let i = 0; i < mass.length; i++)
        {
            if(mass[i][2] < 0 || mass[i][0] > 9)
            {
                error = "Ошибка при вводе массива " +str+ " в элементе " +mass[i];
                mass = false;
            }
        }
        //чётная цифра
        for(let i = 0; i < mass.length; i++)
        {
            if((mass[i][3]%2)>0)
            {
                error = "Ошибка при вводе массива " +str+ " в элементе " +mass[i];
                mass = false;
            }
        }
        //Буква
        for(let i = 0; i < mass.length; i++)
        {
            if(mass[i][4] < 'a' || mass[i][0] > 'z')
            {
                error = "Ошибка при вводе массива " +str+ " в элементе " +mass[i];
                mass = false;
            }

        }
        //Убрать повторный элемент
        for(let i = 0; i < mass.length; i++)
        {
            if(coutElement(mass, mass[i]) > 1)
            {
                mass.splice(i, 1);
                i--;
            }
        }
    }
    else
        error = "В одной или в нескольких строках нету массива";
    return mass;

}
function unification(m1, m2)
{
    let result = "";
    result = m1.join(',');
    for(let i = 0; i < m2.length; i++)
    {
        if(m1.indexOf(m2[i]) == -1)
            result += "," + m2[i];

    }
    return result
}
function obedinenie(m1, m2)
{
    let result = "";
    for(let i = 0; i < m1.length; i++)
    {
        for(let j = 0; j < m2.length; j++)
        {
            if(m1[i] == m2[j])
            {
                if(result != "")
                    result += ", ";
                result +=  m1[i];
            }
        }
    }
    return result
}

function dop(m1, m2)
{
    let schet;
    let result = "";
    for(let i = 0; i < m1.length; i++)
    {
        schet = 0;
        for(let j = 0; j < m2.length; j++)
        {
            if(m1[i] == m2[j])
            {
                schet++;
            }
        }
        if(schet == 0)
        {
            if(result != "")
                result += ", ";
            result += m1[i];

        }
    }
    return result
}

function schitat()
{
    let resultat_full = "";
    let summ = "";
    var a = document.getElementById('massive1');
    var b = document.getElementById('massive2');
    if(mass1 = validate(a.value) == false)
        alert(error);
    if(mass2 = validate(b.value) == false)
        alert(error);
    mass1 = validate(a.value);
    mass2 = validate(b.value);
    if(mass1 != false && mass2 != false)
    {
        resultat_full = "ОБъединение массива " + unification(mass1, mass2) + "\n";
        resultat_full += "Пересечение " + obedinenie(mass1, mass2) + "\n";
        resultat_full += "Дополнение A/B " + dop(mass1, mass2) + "\n";
        resultat_full += "Дополнение B/A " + dop(mass2, mass1) + "\n";
        summ = dop(mass1, mass2) + ", " + dop(mass2, mass1);
        resultat_full += "Симметрическая разность " + summ + "\n";

    }

    document.getElementById('result').innerText = "Результат работы " + "\n" + resultat_full;




}