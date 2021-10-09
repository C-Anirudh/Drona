FROM python:3.8
VOLUME [ "/backend", "/extension" ]

COPY . .
WORKDIR ./backend/

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN apt-get update && ./setup.sh

CMD ["flask", "run"]
EXPOSE 5000/tcp
