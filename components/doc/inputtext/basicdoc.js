import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { Panel } from '@/components/lib/primereact.all';
import { classNames } from '@/components/lib/utils/ClassNames';
import { useState } from 'react';

const firstPanel = {
    root: (details) => ({
        className: classNames('bg-blue-500 p-3 m-2', details.instance && console.log('firstPanel: ', details))
    })
};

const secondPanel = {
    root: (details) => ({
        className: classNames('bg-teal-500 p-3 m-2', details.instance && console.log('secondPanel: ', details))
    })
};

const inputText = {
    root: (details) => ({
        className: classNames('p-3 m-2', details.instance && console.log('inputText: ', details))
    })
};

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Panel pt={firstPanel}>
                    <Panel pt={secondPanel}>
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} pt={inputText} />
                    </Panel>
                </Panel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
