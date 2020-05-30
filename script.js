$(function()
{
     $('.menu__button').on('click',function()
     {
       $('.menu__button').toggleClass('menu--isOpen');
       
       $('.menu').animate({ width: 'toggle' }, 'slow');
       $('.header-cover').animate({ width: 'toggle' }, 'slow');
     });
     

     $('.header-cover').on('click',function()
     {
       $('.menu__button').toggleClass('menu--isOpen');
       $('.menu').animate({ width: 'toggle' }, 'slow');
       $('.header-cover').animate({ width: 'toggle' }, 'slow');
     });
     
     $('.hover01').hover(function()
         {
           $('.profile-border01').stop(true).animate({'width': 'toggle'},{ duration: 500});
         });
     $('.hover02').hover(function()
         {
           $('.profile-border02').stop(true).animate({'width': 'toggle'},{ duration: 500});
         });
     $('.hover03').hover(function()
         {
           $('.profile-border03').stop(true).animate({'width': 'toggle'},{ duration: 500});
         });
     $('.hover04').hover(function()
         {
           $('.profile-border04').stop(true).animate({'width': 'toggle'},{ duration: 500});
         });
    
     
});