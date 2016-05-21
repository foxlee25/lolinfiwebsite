"use strict";

var Item = React.createClass({
    displayName: "Item",
    propTypes: {
        itemInfo: React.PropTypes.object
    },
    getInitialState: function getInitialState() {
        return {
            itemOption: { filter: 'All' }
        };
    },
    setTag: function setTag(tag) {
        this.setState({itemOption: {filter: tag}});
    },
    checkTag: function checkTag(col, tag) {
        if (this.state.itemOption.filter === tag) {
            return col + " labelHighlight";
        } else {
            return col;
        }
    },
    componentDidMount: function componentDidMount() {
        $("html").css("background", "url('images/otherPageBase.jpg')");
        var screenWidth = $(document).width();
        var screenHeight = $(document).height();
        $("body").css("background", "url('images/otherbg.jpg')");

        var xCoordinate, yCoordinate, check;
        $(document).mousemove(function (e) {
            xCoordinate = e.pageX;
            yCoordinate = e.pageY;

            var check_1 = screenHeight - e.clientY - $(".footer").height() - 30 >= $(".itemCard:hover div").height();
            var check_2 = e.clientY > $(".itemCard:hover div").height() + 20;
            var popupWidth = $(".itemCard:hover div").width();

            //                console.log($(document).width());
            if ($(document).width() < 1500) {
                if (check_1) {
                    $(".itemCard:hover div").css({ top: yCoordinate - 80 + 'px' });
                    if (e.clientX + 350 >= screenWidth - 145) {
                        $(".itemCard:hover div").css({ left: xCoordinate - 220 - popupWidth + 'px' });
                    } else {
                        $(".itemCard:hover div").css({ left: xCoordinate - 200 + 'px' });
                    }
                } else if (check_2) {
                    $(".itemCard:hover div").css({ top: yCoordinate - 120 - $(".itemCard:hover div").height() + 'px' });
                    if (e.clientX + 350 >= screenWidth - 145) {
                        $(".itemCard:hover div").css({ left: xCoordinate - 220 - popupWidth + 'px' });
                    } else {
                        $(".itemCard:hover div").css({ left: xCoordinate - 200 + 'px' });
                    }
                } else {
                    $(".itemCard:hover div").css({ top: yCoordinate - 80 - $(".itemCard:hover div").height() / 2 + 'px' });
                    $(".itemCard:hover div").css({ width: 420 + 'px' });
                    $(".itemCard:hover #icon").css({ left: 350 + 'px' });
                    $(".itemCard:hover #price").css({ left: 345 + 'px' });
                    if (e.clientX + 350 >= screenWidth - 145) {
                        $(".itemCard:hover div").css({ left: xCoordinate - 220 - popupWidth + 'px' });
                    } else {
                        $(".itemCard:hover div").css({ left: xCoordinate - 200 + 'px' });
                    }
                }
            } else {
                //                    $("#itemBg").css({width: 1000 + 'px'});
                if (check_1) {
                    $(".itemCard:hover div").css({ top: yCoordinate - 180 + 'px' });
                    if (e.clientX + 350 >= screenWidth - 540) {
                        $(".itemCard:hover div").css({ left: xCoordinate - 380 - popupWidth + 'px' });
                    } else {
                        $(".itemCard:hover div").css({ left: xCoordinate - 360 + 'px' });
                    }
                } else if (check_2) {
                    $(".itemCard:hover div").css({ top: yCoordinate - 220 - $(".itemCard:hover div").height() + 'px' });
                    if (e.clientX + 350 >= screenWidth - 520) {
                        $(".itemCard:hover div").css({ left: xCoordinate - 380 - popupWidth + 'px' });
                    } else {
                        $(".itemCard:hover div").css({ left: xCoordinate - 360 + 'px' });
                    }
                } else {
                    $(".itemCard:hover div").css({ top: yCoordinate - 80 - $(".itemCard:hover div").height() / 2 + 'px' });
                    $(".itemCard:hover div").css({ width: 420 + 'px' });
                    $(".itemCard:hover #icon").css({ left: 350 + 'px' });
                    $(".itemCard:hover #price").css({ left: 345 + 'px' });
                    if (e.clientX + 350 >= screenWidth - 145) {
                        $(".itemCard:hover div").css({ left: xCoordinate - 220 - popupWidth + 'px' });
                    } else {
                        $(".itemCard:hover div").css({ left: xCoordinate - 200 + 'px' });
                    }
                }
            }
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { id: "items" },
                React.createElement(
                    "div",
                    { className: "filterTable" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-1", "All"), onClick: this.setTag.bind(this, 'All') },
                            "All"
                        ),
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-2", "Starting Items"), onClick: this.setTag.bind(this, 'Starting Items') },
                            "Starting Items"
                        ),
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-1", "Tools"), onClick: this.setTag.bind(this, 'Tools') },
                            "Tools"
                        ),
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-1", "Attack"), onClick: this.setTag.bind(this, 'Attack') },
                            "Attack"
                        ),
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-1", "Magic"), onClick: this.setTag.bind(this, 'Magic') },
                            "Magic"
                        ),
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-1", "Defense"), onClick: this.setTag.bind(this, 'Defense') },
                            "Defense"
                        ),
                        React.createElement(
                            "div",
                            { className: this.checkTag("col-sm-2", "Movement"), onClick: this.setTag.bind(this, 'Movement') },
                            "Movement"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { id: "itemBg", className: "small" },
                    Object.keys(this.props.itemInfo).map(function(key){
                        var item = this.props.itemInfo[key];
                        return React.createElement(
                            "div",
                            { className: "itemCard", key: key },
                            React.createElement("img", { className: "itemImg", src: 'images/item_info/' + item.id + '.png' }),
                            React.createElement(
                                "div",
                                { id: "popupWindow" },
                                React.createElement("img", { id: "popupImage", src: 'images/item_info/' + item.id + '.png' }),
                                React.createElement("img", { id: "icon", src: 'images/money_icon.png' }),
                                React.createElement(
                                    "b",
                                    { id: "popupItemName" },
                                    item.name
                                ),
                                React.createElement(
                                    "p",
                                    { id: "price" },
                                    "3000"
                                ),
                                React.createElement("br", null),
                                React.createElement(
                                    "p",
                                    null,
                                    item.plaintext
                                ),
                                React.createElement("p", { id: "descrip", dangerouslySetInnerHTML: { __html: item.description } })
                            )
                        );
                }.bind(this))
            )
        );
    }
});


app.value( "Item", Item );

