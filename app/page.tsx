import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Eth Wallet App</title>
                <meta name="description" content="Eth Wallet App"></meta>
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-4 ">
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                    <a
                        href="https://github.com/SimSimButDifferent/L3-EthWalletFrontEnd"
                        className="group rounded-lg border border-transparent px-10 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Front End Repo{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Check out the repo if you want to mess around with
                            the code yourself.
                        </p>
                    </a>

                    <a
                        href="https://github.com/SimSimButDifferent/L3-EthWallet"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Backend Repo{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Take a look at the hardhat deployment of the smart
                            contract.
                        </p>
                    </a>

                    <a
                        href="https://simsimbutdifferent.gitbook.io/prompt_web3/"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            My Journey{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            Have a look into my self-learning journey into web3
                            using chatGpt.
                        </p>
                        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                            A template to learn anything software related.
                        </p>
                    </a>
                </div>
            </main>
        </div>
    )
}
