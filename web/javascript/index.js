function todoApp(){
    return{
        darkMode: localStorage.getItem('theme')=='dark',
        dyslexie: localStorage.getItem('dyslexie')== 'true',
        newTask:''),taches : 
        JSON.parse(localStorage.getItem('taches')) || [],
    }

}