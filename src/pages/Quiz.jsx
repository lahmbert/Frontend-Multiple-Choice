import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Quiz = () => {

    const [detik, setDetik] = useState(59)
    const [menit, setMenit] = useState(1)
    let [finish, setFinish] = useState(1)
    let [benar, setBenar] = useState(0)
    let [salah, setSalah] = useState(0)
    const [soal, setSoal] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [quest, setQuest] = useState([])
    const [answer, setAnswer] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get(
            'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple'
        )

        let arrData = data.results[0]
        let arrQuestion = arrData?.question
        let allAnswer = [...arrData?.incorrect_answers]
        let corrAnswer = arrData?.correct_answer
        allAnswer.push(corrAnswer)
        let kuiz = []
        for (let index = 0; index < 4; index++) {
            let num = Math.floor(Math.random() * 4);
            let check = kuiz.includes(num)
            while (check) {
                num = Math.floor(Math.random() * 4)
                check = kuiz.includes(num)
            }
            kuiz.push(num)
        }
        let randomAnswer = allAnswer.map((el, index) => {
            return allAnswer[kuiz[index]]
        })
        setCorrectAnswer(corrAnswer)
        setAnswer(randomAnswer)
        setQuest(arrQuestion)
    }


    useEffect(() => {
        fetchData()
    }, [soal])

    function pindah(value) {

        if (value === correctAnswer) {
            benar = benar + 1

            setBenar(benar)

        } else {
            salah = salah + 1

            setSalah(salah)
        }
        setSoal(soal + 1)
    }

    let timer = useRef()
    useEffect(() => {
        timer.current = setInterval(() => {
            setDetik(detik - 1)
            if (detik === 0) {
                setMenit(menit - 1)
                setDetik(59)
                if (menit === 0 || detik === 1) {
                    setFinish(finish - 1)
                }
            }

        }, 1000)
        return () => clearInterval(timer.current)
    })
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);
    if (!authenticated) {
        // return <Navigate to='/auth' />
    } else {
        return (
            <div>
                {/* Quiz */}
                {/* <p> {JSON.stringify(quiz)} </p> */}

                {
                    (benar + salah) !== 10 && (finish !== 0)

                        ?
                        <div className='text-center w-screen h-screen grid md:grid-cols-5 bg-slate-300 p-4 md:py-12'>
                            <div className='mb-1.5 md:col-start-2 col-span-3'>
                                <div className='flex shadow-md mb-1 uppercase font-bold text-xs bg-slate-100 justify-between p-4'>
                                    <div className='flex gap-1'>
                                        Soal No.<p className='bg-blue-700 text-white px-1'>{soal + 1}</p>
                                    </div>
                                    <div className='hidden md:flex gap-2 justify-between'>
                                        <div>
                                            Score:
                                        </div>
                                        <div>
                                            {benar}/10
                                        </div>
                                    </div>
                                    <div className='inline-flex'>
                                        <p className='px-1 bg-gray-400 text-white'>Sisa Waktu</p>
                                        <p className='px-1 bg-blue-700 text-white'>
                                            {menit < 10 ? '0' + menit : menit}:{detik < 10 ? '0' + detik : detik}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-left bg-slate-100 mb-1 p-4'>
                                    <div className=' border-2 px-4 border-gray-300'>
                                        <div className='py-4 border-b-2 border-gray-300'>
                                            {
                                                quest
                                            }
                                        </div>

                                        <div className='flex-row py-4'>

                                            {
                                                answer && answer.map((el, index) => (
                                                    <div className='pb-4 flex gap-1' key={index}>
                                                        <input type="radio" name="jawaban" onClick={(e) => pindah(e.target.value)} value={el} id="" />
                                                        <label htmlFor={el}>{el}</label>
                                                        {/* <button className='p-1 px-4' value={el} onClick={(e) => pindah(e.target.value)}>{el}</button> */}

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        :
                        <div className='text-center w-screen h-screen grid md:grid-cols-5 lg:grid-cols-11 bg-slate-300 p-4 py-8 md:py-28'>
                            <div className='mb-1.5 md:col-start-2 lg:col-start-5 col-span-3'>
                                <div className='text-left rounded-xl bg-slate-100 mb-1 p-8'>
                                    <div className=' border-2 px-4 rounded-xl border-teal-500'>
                                        <div className='p-8 uppercase font-semibold text-xs md:text-md text-center'>
                                            <div className='mb-10 flex justify-center gap-2'>
                                                <div>
                                                    Total Score :
                                                </div>
                                                <div>
                                                    {benar / 10 * 100}%
                                                </div>
                                            </div>
                                            <div className='mb-3 flex justify-center gap-2'>
                                                <div>
                                                    Salah :
                                                </div>
                                                <div>
                                                    {salah}/10
                                                </div>
                                            </div>
                                            <div className='mb-3 flex justify-center gap-2'>
                                                <div>
                                                    Benar :
                                                </div>
                                                <div>
                                                    {benar}/10
                                                </div>
                                            </div>
                                            <div className='flex justify-center gap-2'>
                                                <div>
                                                    Total :
                                                </div>
                                                <div>
                                                    {benar + salah}/10
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }






            </div>
        )
    }
}


export default Quiz