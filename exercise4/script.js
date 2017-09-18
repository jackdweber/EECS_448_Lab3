function update_p(){
    var border_red = document.getElementById('border_red').value
    var border_green = document.getElementById('border_green').value
    var border_blue = document.getElementById('border_blue').value
    var border_width = document.getElementById('border_width').value
    var bg_red = document.getElementById('bg_red').value
    var bg_green = document.getElementById('bg_green').value
    var bg_blue = document.getElementById('bg_blue').value

    var colors = [border_red, border_blue, border_green, bg_blue, bg_red, bg_green]
    for (c in colors){
        if( colors[c] < 0 || colors[c] > 255){
            alert('On of the colors is out of range (0-255)')
            return
        }
    }

    var p = document.getElementById('p1')

    p.style.border = border_width + 'px' + ' solid ' + 'rgb('+ border_red +', ' + border_green + ', ' + border_blue + ')'
    p.style.backgroundColor = 'rgb(' + bg_red + ', ' + bg_green + ', ' + bg_blue + ')'

}