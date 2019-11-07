interface Iconfig {
    steps: Istep[],
    done: boolean[]
}
interface Istep {
    checks: Icheck[],
    warning?: string[],
    relatedAPIs?: string[]

}
interface Icheck {
    checkText: string,
    code?: {
        before?: string,
        after?: string
    }
}

interface Ieditor {
    language: string,
    width?: string,
    height?: string
    value: string,
    theme? : "dark" | "light" | undefined
}
