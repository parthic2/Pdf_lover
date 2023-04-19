import React, { useEffect } from 'react';

function Ads(props) {

    const { dataAdSlot } = props;

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
            console.log(error);
        }
    }, []);


    return (
        <div>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-5305155098388318"
                data-ad-slot="7135941684"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    )
}

export default Ads;

// TagError: adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.
//     at hp (adsbygoogle.js?client=ca-pub-4831098370069577:209:210)
//     at Xo (adsbygoogle.js?client=ca-pub-4831098370069577:206:333)
//     at To.e.client (adsbygoogle.js?client=ca-pub-4831098370069577:201:42)
//     at Ud.ga (adsbygoogle.js?client=ca-pub-4831098370069577:45:224)
//     at rj (adsbygoogle.js?client=ca-pub-4831098370069577:93:19)
//     at To (adsbygoogle.js?client=ca-pub-4831098370069577:201:31)
//     at Object.push (adsbygoogle.js?client=ca-pub-4831098370069577:213:935)
//     at main.098e0b1808e7548fe54b.hot-update.js:31:55
//     at commitHookEffectListMount (react-dom.development.js:23150:1)
//     at commitPassiveMountOnFiber (react-dom.development.js:24926:1)