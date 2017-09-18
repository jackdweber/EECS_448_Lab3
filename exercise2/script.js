var imgs = ["https://upload.wikimedia.org/wikipedia/commons/5/55/Atelopus_zeteki1.jpg", 
            "http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Frogs/ww-frogs-budgetts.adapt.945.1.jpg",
            "http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Frogs/ww-frogs-waxy-monkey-tree.adapt.945.1.jpg",
            "http://www.artfido.com/blog/wp-content/uploads/2016/11/016.jpg",
            "http://voxpopulinews.net/wp-content/uploads/2016/03/Mink-frog.jpg"
            ]

//Current count and total length of image list.
var COUNT = 0
var COUNT_TOTAL = imgs.length

//Func to get next img in sequence.
var next_image = function() {
    var new_count = COUNT + 1
    if(new_count >= COUNT_TOTAL){
        new_count = 0
    }
    new_image(imgs[new_count])
    COUNT = new_count
}

//Func to get previous img in list.
var prev_image = function(){
    var new_count = COUNT - 1
    if(new_count < 0){
        new_count = COUNT_TOTAL - 1
    }
    new_image(imgs[new_count])
    COUNT = new_count
}

//Func to update DOM with new image.
var new_image = function(imgsrc){
    document.getElementById('img1').src = imgsrc
}

//Load the first img on first run.
new_image(imgs[COUNT])