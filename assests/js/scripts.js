/* global $ */
$("document").ready(function() {
    "use strict";
    // appending anything to the body, ids or classes
    $("#uploaedtxt").append("<em>The page just loaded!</em>");
    
    //Appending h2 and p
    $("body .storage").prepend("<h2 class='headers'>List</h2>");

    // adding style to tags, ids or classes
    $("p.b").css("border", "2px solid green");
    $(".selectors").css("background", "#fff");
    
    // Filters for triggering 
    $("p:first").css("border", "3px solid blue");
    $("h4:not(.heading)").css("color", "blue");
    $("#extras p:last").css("border", "2px solid pink");
    //$("#extras p:even").css("border", "2px solid darkolivegreen");
    //$("#extras p:odd").css("border", "2px solid blueviolet");
    $("#extras .a:first").css("border", "2px solid palegoldenrod");
    //$("#extras .b:even").css("border", "2px solid tan");
    //$("#extras p:gt(1)").css("border","2px solid chartreuse");
    //$("#extras p:not(p:eq(2))").css("border", "2px solid deepskyblue");
    
    //all p with class attr
    //$("p[class]").css("background", "chartreuse");
    $("p[id=ab1]").css("background", "tan");
    $("p[id^=abc]").css("border", "1px dashed darkolivegreen");
    $("p[id^=abc][lang*=en-]").css("background", "deepskyblue");
   
    //attributes filters 
    $("p:contains('2016')").css("border", "2px dotted red");
    
    //selects all paragraphs
    //$("p:parent").css("background", "blue");
    $("div:has(p[id=c1])").css("border", "3px solid red");
    //$("div p:first-child").css("border", "3px solid red");
    //$("div p:last-of-type").css("border", "3px solid red");
    //$("div p:nth-child(3)").css("border", "3px solid red");
    //$("div p:nth-child(2n)").css("border", "3px solid red");
    
    //animations
    $("#go").click(function() {
        $("#testDiv").animate({width: 400}, 300)
        .animate({height: 300}, 400)
        .animate({left: 200}, 500)
        .animate({top: "+=100", borderWidth: 10}, "slow");
    });
    
    //Creating and changing page content
    var newP = $("<p>");
        newP.append("<em> 🤓 Hello There</em>");
        // inserts the text you append to this id
        $("#example").html(newP);
        //add text before the id
        $("#creation").prepend("(jQuery Text!) ");
        // change the existing content
        //$("#example").html("<h2>This is a new H2</h2>");
        //this creates the normal text including the tags
        //$("#example").text("<h2>This is a new H2</h2>");
    
    //advanced inserting content
    //$("#insertCnt p:last").appendTo("#insertCnt p:first");
    //$("#insertCnt p:last").prependTo("#insertCnt p:first");
    
    // Insertion functions for inserting outside of content
    //$("#insertCnt p").after("°°");
    //$("#insertCnt p").before("**");
    $("<p>Hello I am new in the p</p>").insertAfter("#insertCnt p:first");
    $("<p>Just the new dummy text</p>").insertBefore("#insertCnt p:last");
    
    //Altering text
    //$("#alter p").wrap("<div style='color:red'/>");
    //$("#alter p").wrapAll("<div style='border:3px solid red'/>");
    //$("#alter").empty();
    //$("#alter p#altering2, #alter p#altering4").remove();
    //$("#alter p#altering2, #alter p#altering4").detach();
    $("<div class=\"replace\">replaced</div>").replaceAll("#alter p[id]");
    $(".replace").css("color", "red");
    $(".replace").css("fontWeight", "bold");
    //$("#alter p[id]").replaceWith("<div>replaced</div>");
   
    //function in the bottom
    //$("#alter p").replaceWith(replacementFn);
   
    //traversing
        // The children() function retrieves the immediate (that is, first-level down) child
        // elements of the matched set, excluding text nodes.
        //$("#travers").children().css("background", "yellow");

        var elem = $("#basic1");
        //triggers prev and next and parents element of the id
        elem.prev().css("border", "3px solid red");
        elem.next().css("border", "3px solid green");
        //triggers pasrents of element (its all parents) for better use parentsUntill
        //elem.parents().css("border", "3px solid blue");
        
        elem.parentsUntil($("body")).css("border", "3px solid blue");

        // use the find function to locate content within particular elements
        $("#travers").find("#basic5").css("background", "yellow");

        // use the each function to iterate over a set of elements and operate on them
            var leftmargin = 0;
            var border = 3;
            $("#travers p").each(function(index, element) {
                $(element).css("border", border+"px solid orange")
                          .css("margin-left", leftmargin);
                border += 2;
                leftmargin += 15;
            });
    
    // Add a title attribute to all of the images
    $("a").attr("title", "Snapshots");
    // Make each image open in a new window
    $("a").attr("target", "_blank");
    // Remove the href from the <a> tags, making images unclickable
    //$("a").removeAttr("href");
    // Modify multiple attributes at once
    //$("img").attr({ src: "assests/img/3.png", title: "Quotes this!" });
    
    //Buttons to change content
    document.getElementById("create").addEventListener("click", function (evt) {
        createContent();
    });
    document.getElementById("change").addEventListener("click", function (evt) {
        changeContent();
    });
    document.getElementById("changeAll").addEventListener("click", function (evt) {
        changeAllTheContent();
    });
    
    //append text for data-type 
    $("#travers p[data-type='flavor']").append(" (flavor)");
    
    //events are triggered
    $("#eventing").on("mousemove", onMouseOver);
    $("#eventing").on("click", onMouseClick);
    $("#eventing").on("mouseleave", onMouseLeave);
    
    //CSS setting Properties
    $("#setProp").click(function(evt) {
        $("#property p").css("text-decoration", "underline")
                        .css("font-size", "+=1pt");
    });

    $("#setProps").click(function(evt) {
        $("#property p").css({
            "font-weight" : "bold",
            "color" : "red",
            "text-decoration" : "underline"
        });
    });
    $("#addCl").click(function(evt) {
        $("#property p").addClass("pClass");
    });

    $("#rmCl").click(function(evt) {
        $("#property p").removeClass("pClass");
    });

    $("#toggleCl").click(function(evt) {
        $("#property p").toggleClass("pClass");
    });
    
    // jQuery as of 1.7 provides the universal "on" and "off" functions
    //Binding highlight
    $("#evtBind").bind("mouseover mouseleave", highlight);
    //turn on n off highlight enter text after click
    $("#evtBind").on("click", function(evt) {
        $("#evtBind").off("mouseover mouseleave", highlight);
        $("#evtBind").html("<p>😟 Awwww....You shut off the hover effect 🤔</p>");
        $("#evtBind").removeClass("highlighting");
    });

    $("#textEntry").on("keypress", function(evt) {
        $("#keyPressed").text(String.fromCharCode(evt.charCode));
    });
    
    //Helpers Binding
    $("#bindHelpers").hover(highlighted, highlighted);
    
    $("#bindHelpers").click(fnClick1);

    $("#bindHelpers").dblclick(function(fnClick2){
        $(this).css({ background: "green",
                      color: "red",
                      fontWeight: "bold",
                      fontSize: "3em"
        });
    });

    $(window).resize(fnResize);

    $("#bindHelpers").one("click", function() {
        $(this).css({ background: "blue",
            cursor: "auto"
        });
    });
    
    //Event Object
    $("#box1").on("click dblclick", { name: "Box 1" }, function(evt) {
        updateEventDetails(evt);
        evt.stopPropagation();
    });
    $("#box2").on("click dblclick", { name: "Box 2" }, function(evt) {
        updateEventDetails(evt);
        evt.stopPropagation();
    });
    $("#box3").on("click dblclick", { name: "Box 3" }, function(evt) {
        updateEventDetails(evt);
        evt.stopPropagation();
    });
    $("div.smallbox").on("mouseenter", function(evt) {
        updateEventDetails(evt);
        evt.stopPropagation();
    });
    $("div.smallbox").on("mouseleave", function(evt) {
        updateEventDetails(evt);
        evt.stopPropagation();
    });
    $("div.smallbox").on("mousemove", function(evt) {
        updateEventDetails(evt);
        evt.stopPropagation();
    });

    $("#input1").keypress(updateEventDetails);
    
    //Image rotator
    $(function() {
        // create the image rotator
        setInterval("rotateImages()", 3000);
    });
    
    // select the H1 - these contain the text for the links
    var headings = $("body h1");
    // create a new empty UL tag to hold the list of links
    var list = $("<ul id='contents'>");
    // we need a counter to make sure each anchor tag has a unique name
    var cAnchorCount = 0;

    // for each one of the H2s, create a named anchor to link to and a link for the list
    headings.each(function(indx, elem) {
        // set the HTML of this H2 to contain the new anchor tag that is the link destination
        $(this).html("<a name='contents" + cAnchorCount + "'></a>" + $(this).html());
        // now make a new LI tag for the list that links to the anchor tag and has the text of the H2
        list.append($("<li><a href='#contents" + cAnchorCount++ + "'> " + $(this).text() + "</a></li>"));
    });
    // when we're done, insert the list after the H1 heading that lists the specials
    $("body .sidebar").append(list);
    
});

//rotate images
function rotateImages() {
    var curPhoto = $('#imgholder div.current');
    var nxtPhoto = curPhoto.next();
    if (nxtPhoto.length == 0)
        nxtPhoto = $('#imgholder div:first');

    curPhoto.removeClass('current').addClass('previous');
    nxtPhoto.css({ opacity: 0.6 }, 2000).addClass('current')
            .animate({ opacity: 1.0 }, 2000,
                        function() {
                            curPhoto.removeClass('previous');
                        });
}

//Binding Event highlight
function highlight(evt) {
    $("#evtBind").toggleClass("highlighting");
}

function onMouseOver(evt) {
    $("#eventing").text(evt.type + ": " + evt.pageX + ", " + evt.pageY
                       + "\n" + "Button: " + evt.which +
                       " Key: " + evt.altKey);
}
function onMouseClick(evt) {
    $("#eventing").text(evt.type + ": " + evt.pageX + ", " + evt.pageY);
    $("#eventing").off("mousemove", onMouseOver);
}
function onMouseLeave(evt) {
    $("#eventing").text("mouseleave");
}

//Helpers binding
function highlighted() {
    $("#bindHelpers").toggleClass("highlighted");
}
function fnClick1() {
    $("#bindHelpers").html("Click");
}
function fnClick2() {
    $("#bindHelpers").html("Double Click");
}
function fnResize() {
    $("#bindHelpers").html("Browser window resized");
}

//creating content 
// use the html() function to get the current HTML of an element
//alert($("#createCntdiv").html());
function createContent() {
    // use the html() function to change the content of the div
    //$("#createCntdiv").html("<p>Hi there!</p>");
    // create a new <p> and change to new content 
    var newItem = $("<p>This is a new paragraph</p>");
        $("#content3").html(newItem);
}
function changeContent() {
    // set the text content of the last paragraph
    $("#createCntdiv p:last").text("I've changed the last paragraph");
}
function changeAllTheContent() {
    $("#createCntdiv p").text("I've changed all the paragraphs!");
}

//altering text
function replacementFn() {
    if ($(this).text().indexOf("1") != -1) {
        return "<p>This is now a paragraph uno</p>";
    }
}

//CSS positioning
$(function() {
    showValues();
    //click on the container and the values change
    $("#posit").click(changeValues);
});
function changeValues() {
    $("#posit").height(100);
    $("#posit").width(200);
    
    showValues();
}
function showValues() {
    $("#height").html($("#posit").height());
    $("#width").html($("#posit").width());
    $("#innerH").html($("#posit").innerHeight());
    $("#outerH").html($("#posit").outerHeight());
    $("#outerW").html($("#posit").outerWidth());
    $("#innerW").html($("#posit").innerWidth());
    $("#offset").html($("#posit").offset().top + ", " + $("#posit").offset().left);
    $("#position").html($("#posit").position().top + ", " + $("#posit").position().left);
}

// Event object
function updateEventDetails(evt) {
    // clear any current text before we update the value fields
    $(".detailLine span[id]").text("");

    $("#evtType").text(evt.type);
    $("#evtWhich").text(evt.which);
    $("#evtTarget").text(evt.target.id);
    if (evt.relatedTarget)
        $("#evtRelated").text(evt.relatedTarget.tagName);
    $("#evtPageX").text(evt.pageX);
    $("#evtPageY").text(evt.pageY);
    $("#evtClientX").text(evt.clientX);
    $("#evtClientY").text(evt.clientY);
    $("#evtMetaKey").text(evt.metaKey);
    if (evt.data)
        $("#evtData").text(evt.data.name);
}