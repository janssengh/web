import tkinter as tk


janela = tk.Tk()
canvas = tk.Canvas(janela, width=100, height=80)
canvas.pack()
#desenha uma linha no canvas: create_line(p1,p2,cor)
canvas.create_line(0, 20, 100, 20, fill="green")
canvas.create_line(0, 40, 100, 40, fill="yellow")
canvas.create_line(0, 60, 100, 60, fill="blue")
janela.mainloop()
