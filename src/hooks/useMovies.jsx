"use client"
import { useState, useEffect } from 'react'
import axios from '@/lib/api'

const useGetMovies = (sortBy, page = 1) => {
    const [dataMovies, setDataMovies] = useState([])

    useEffect(() => {
        axios.get(`/discover/movie?page=${page}&sort_by=${sortBy}`)
            .then((res) => setDataMovies(res.data))
            .catch((err) => console.log(err))
    }, [page, sortBy])

    return dataMovies
}

const useGetDetailMovie = (id) => {
    const [dataMovie, setDataMovie] = useState([])

    useEffect(() => {
        axios.get(`/movie/${id}`)
            .then((res) => setDataMovie(res.data))
            .catch((err) => console.log(err))
    }, [id])

    return dataMovie
}

export {
    useGetMovies,
    useGetDetailMovie
}