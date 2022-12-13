const buttons = document.querySelectorAll('.buttons button')
const widget_text = document.querySelector('.widget-text')
const widget_text_content = {
    button1: `Morbi metus purus, mattis eget aliquet ac, <b>pellentesque eget dolor</b>. Praesent lacinia risus at neque hendrerit, vel lacinia dui ornare. Sed fermentum augue quis lectus dictum ornare. Sed sem nisl, euismod sit amet tellus in, tempor pellentesque justo. Suspendisse turpis nibh, vehicula vitae metus sed, volutpat porta orci. Nullam laoreet, ligula eget varius eleifend, magna felis elementum diam, id scelerisque velit arcu vitae augue. Ut gravida lorem sit amet dolor.`,
    button2: `<b>Commodo pretium nisi, vel pellentesque purus</b> bibendum sit amet. In interdum nunc semper aliquet pulvinar. Aliquam hendrerit facilisis diam, et fermentum mauris tristique ac. Aenean et magna eget sem ultricies interdum nec sodales nunc. Quisque eget mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue arcu, consequat nec dui vitae, ornare varius tellus. Nulla luctus lorem sed ultrices viverra. Integer eu mi ut lacus consequat interdum.`,
    button3: `Nullam interdum rutrum arcu in tempus. Mauris consectetur risus ligula. Sed sit amet nulla at leo commodo luctus dapibus et nisl. Morbi luctus gravida tempus. Proin eu purus fringilla nunc facilisis bibendum. Integer sit amet auctor nulla. Nulla ac sodales ligula. Aliquam dolor risus, <b>posuere et augue quis, convallis pulvinar turpis</b>. Vestibulum at tellus tincidunt, aliquam nulla congue, fringilla nibh. Fusce tellus risus, venenatis quis blandit nec, consequat vel neque.`,
    button4: `Suspendisse potenti. Etiam felis leo, dictum eget lobortis nec, molestie ac dolor. Cras rhoncus, tellus in convallis accumsan, libero quam vehicula libero, eu commodo tortor urna tincidunt metus. <b>Nunc iaculis facilisis massa, eget blandit urna luctus ut.</b> Etiam quis ex aliquet mauris venenatis consectetur nec ut orci. Sed id efficitur diam, eget vehicula libero. Aenean id sagittis nibh. Phasellus sem purus, sagittis sit amet molestie sit amet, condimentum vel diam.`,
    button5: `Curabitur faucibus et eros a rhoncus. Mauris elementum urna risus, a pretium mauris egestas at. Vivamus scelerisque odio ac fermentum euismod.<b>Interdum et malesuada fames ac ante ipsum primis in faucibus.</b> Duis placerat est et hendrerit condimentum. Pellentesque ligula arcu, iaculis ac posuere in, placerat et elit. Aenean volutpat consectetur molestie. Nulla viverra semper dictum. Fusce eget pharetra ante. Vivamus scelerisque nisi accumsan augue blandit malesuada. Suspendisse potenti. Cras vulputate.`
}
widget_text.innerHTML = widget_text_content.button1
buttons.forEach((button, index)=>{
    button.addEventListener('click', e=>{
        if(e.target.tagName === 'BUTTON' || e.target.tagName === 'SPAN'){
            buttons.forEach(button=>{
                button.classList.remove('active')
            })
            button.classList.add('active')
            widget_text.innerHTML = widget_text_content[Object.keys(widget_text_content)[index]]
        }

    })
})