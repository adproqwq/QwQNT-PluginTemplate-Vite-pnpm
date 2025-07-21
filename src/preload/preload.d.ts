import { C as CoreExports, F as FrameworkExports } from './exports-BbSQDSNy.js';

interface ContextRenderer {
    core: CoreExports;
    framework: FrameworkExports;
}
declare global {
    const qwqnt: Readonly<ContextRenderer>;
}

export type { ContextRenderer };
